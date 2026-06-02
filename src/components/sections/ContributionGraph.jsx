import { useEffect, useRef, useState } from 'react'
import './ContributionGraph.css'

// Months to display as column labels (53 weeks)
const MONTHS = ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May']

// Map GitHub API levels to our CSS levels
const LEVEL_MAP = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
}

// TODO: Replace with your actual GitHub username!
const GITHUB_USERNAME = 'Adityalive'

export default function ContributionGraph() {
  const ref = useRef(null)
  const [weeks, setWeeks] = useState(() => Array.from({ length: 53 }, () => Array(7).fill(0)))
  const [total, setTotal] = useState(0)

  useEffect(() => {
    async function fetchContributions() {
      try {
        const res = await fetch(`https://github-contributions-api.deno.dev/${GITHUB_USERNAME}.json`)
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        
        let totalCount = 0
        const parsedWeeks = data.contributions.map((week) =>
          week.map((day) => {
            totalCount += day.contributionCount
            return LEVEL_MAP[day.contributionLevel] || 0
          })
        )
        setWeeks(parsedWeeks)
        setTotal(totalCount)
      } catch (err) {
        console.error('Error fetching GitHub contributions:', err)
      }
    }
    fetchContributions()
  }, [])


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
