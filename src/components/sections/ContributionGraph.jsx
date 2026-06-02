import { useEffect, useRef, useState } from 'react'
import './ContributionGraph.css'

// Months to display as column labels (53 weeks)
const MONTHS = ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May']

// Generate a realistic mock contribution grid (53 weeks × 7 days)
function generateMockGrid() {
  const weeks = []
  const totalWeeks = 53
  for (let w = 0; w < totalWeeks; w++) {
    const days = []
    // More recent weeks (closer to end) have higher activity
    const recencyBoost = w / totalWeeks
    for (let d = 0; d < 7; d++) {
      const rand = Math.random()
      // ~35% chance of 0, rest gets a level 1-4 weighted by recency
      let level = 0
      if (rand > 0.38) {
        const base = rand * (1 + recencyBoost * 1.5)
        if (base > 1.5) level = 4
        else if (base > 1.0) level = 3
        else if (base > 0.7) level = 2
        else level = 1
      }
      days.push(level)
    }
    weeks.push(days)
  }
  return weeks
}

const GITHUB_USERNAME = 'adityakumar' // change to real username if needed

export default function ContributionGraph() {
  const ref = useRef(null)
  const [weeks] = useState(() => generateMockGrid())
  const [total] = useState(910)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="contrib section" ref={ref}>
      <div className="container">
        <div className="contrib__inner fade-in">
          {/* Month labels */}
          <div className="contrib__months">
            {MONTHS.map((m) => (
              <span key={m} className="contrib__month">{m}</span>
            ))}
          </div>

          {/* Grid */}
          <div className="contrib__grid" role="img" aria-label={`${total} GitHub contributions in the past year`}>
            {weeks.map((days, wi) => (
              <div key={wi} className="contrib__week">
                {days.map((level, di) => (
                  <div
                    key={di}
                    className={`contrib__cell contrib__cell--${level}`}
                    aria-label={`Level ${level} activity`}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* Footer row */}
          <div className="contrib__footer">
            <span className="contrib__count">
              {total} <span className="contrib__count-label">CONTRIBUTIONS · 2025–26</span>
            </span>
            <div className="contrib__legend">
              <span className="contrib__legend-label">LESS</span>
              {[0, 1, 2, 3, 4].map((l) => (
                <div key={l} className={`contrib__cell contrib__cell--${l}`} />
              ))}
              <span className="contrib__legend-label">MORE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
