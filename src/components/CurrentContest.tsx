'use client'
import { motion } from 'framer-motion'

const phases = [
  {
    title: 'Phase 01 - Orientation',
    timeframe: 'Nov 10 - Nov 24',
    description: 'Pre-register, review the starter repository, and attend the systems design warm-up with the mentors.',
  },
  {
    title: 'Phase 02 - Launch Week',
    timeframe: 'Nov 25 - Dec 4',
    description: 'All three problem statements unlock on launch day. Join the kickoff announcement and submit your first baselines.',
  },
  {
    title: 'Phase 03 - Optimization Sprint',
    timeframe: 'Dec 5 - Dec 25',
    description: 'Refine inference pipelines, monitor leaderboard drift, and finalize cross-track ensembling before final lock.',
  },
]

const resources = [
  {
    label: 'Starter Kit Repo',
    href: 'https://www.kaggle.com/code/placeholder/starter-kit',
  },
  {
    label: 'Multi-Track Brief PDF',
    href: 'https://www.kaggle.com/competitions/sota-tri-track/overview',
  },
  {
    label: 'Rules & Scoring',
    href: '#how-it-works',
  },
]

const problemTracks = [
  {
    name: 'Track A - NLP',
    objective: 'Intent understanding on noisy support chats with grounded retrieval.',
    metric: 'Macro F1 across 42 intents',
  },
  {
    name: 'Track B - Computer Vision',
    objective: 'Pixel-wise defect segmentation for aerospace composites under hardware limits.',
    metric: 'Dice coefficient with latency gate',
  },
  {
    name: 'Track C - Classical ML',
    objective: 'Probabilistic demand forecasting for a sensor vendor using tabular telemetry.',
    metric: 'Weighted pinball loss at 0.1, 0.5, 0.9 quantiles',
  },
]

export default function CurrentContest() {
  return (
  <section id="current-round" className="relative isolate overflow-hidden bg-[#050508] py-16 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#14213d33,transparent_55%)]" />
      <div className="container mx-auto max-w-6xl px-6 lg:px-12 relative z-20">
  <div className="flex flex-col gap-8 lg:flex-row">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9 }}
            className="flex-1 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-[0_0_28px_rgba(34,197,94,0.12)]"
          >
            <span className="text-xs uppercase tracking-[0.35em] text-green-300">Current Month</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-white">SOTA Monthly Contest</h2>
            <p className="mt-2 text-sm text-gray-300">
              Three real-world problem statements drop together on launch day — perform across NLP, CV, and tabular forecasting to top the combined leaderboard.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                { label: 'Prize Pool', value: 'Subscriptions & coupons worth $2,000' },
                { label: 'Launch', value: 'Nov 25, 2025 · 11:00 AM IST' },
                { label: 'Final Submission Deadline', value: 'Dec 25, 2025 · 11:59 PM IST' },
                { label: 'Leaderboard Format', value: 'Aggregate normalised scores across all three tracks' },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-white/10 bg-black/40 p-4"
                >
                  <p className="text-[0.7rem] uppercase tracking-[0.35em] text-gray-400">{item.label}</p>
                  <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {resources.map((resource) => (
                <motion.a
                  key={resource.label}
                  whileHover={{ y: -2 }}
                  href={resource.href}
                  target={resource.href.startsWith('http') ? '_blank' : undefined}
                  rel={resource.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200 backdrop-blur"
                >
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                  {resource.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.1, duration: 0.9 }}
            className="flex-1 flex flex-col gap-10"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-gray-400">Problem Tracks</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">Three domains. One combined leaderboard.</h3>
              <div className="mt-8 grid gap-5">
                {problemTracks.map((track) => (
                  <motion.div
                    key={track.name}
                    whileHover={{ borderColor: 'rgba(74,222,128,0.4)' }}
                    className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur"
                  >
                    <p className="text-sm font-semibold text-green-300">{track.name}</p>
                    <p className="mt-3 text-sm text-gray-300">{track.objective}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.3em] text-gray-400">Primary metric: {track.metric}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-gray-400">Contest Timeline</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">Plan your build cycles with precision</h3>
              <div className="mt-8 flex flex-col gap-6">
                {phases.map((phase, index) => (
                  <motion.div
                    key={phase.title}
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                    className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
                  >
                    <span className="absolute -top-3 -right-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-400/10 text-green-300 text-sm font-semibold">
                      {`0${index + 1}`}
                    </span>
                    <p className="text-sm font-semibold text-green-300">{phase.title}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.3em] text-gray-400">{phase.timeframe}</p>
                    <p className="mt-3 text-sm text-gray-300">{phase.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
