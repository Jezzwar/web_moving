import { motion } from 'framer-motion'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import { SectionWrapper, fadeUpVariant } from '../ui/SectionWrapper'
import { Badge } from '../ui/Badge'

const topCities = [
  'New York, NY', 'Los Angeles, CA', 'Chicago, IL', 'Houston, TX',
  'Phoenix, AZ', 'Philadelphia, PA', 'San Antonio, TX', 'Dallas, TX',
  'San Diego, CA', 'San Jose, CA', 'Austin, TX', 'Jacksonville, FL',
  'Seattle, WA', 'Denver, CO', 'Nashville, TN', 'Miami, FL',
]

function USAMapSVG() {
  return (
    <ComposableMap projection="geoAlbersUsa" style={{ width: '100%', height: 'auto' }}>
      <Geographies geography="/us-states.json">
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#FF6B2B"
              fillOpacity={0.75}
              stroke="#fff"
              strokeWidth={1.5}
              style={{
                default: { outline: 'none' },
                hover: { fill: '#FF8F5E', fillOpacity: 1, outline: 'none', cursor: 'pointer' },
                pressed: { outline: 'none' },
              }}
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  )
}

export function CoverageMapSection() {
  return (
    <SectionWrapper id="coverage" className="py-20 bg-surface-gray-50">
      <motion.div variants={fadeUpVariant} className="text-center mb-12">
        <span className="text-brand-orange font-semibold text-sm uppercase tracking-widest">Where We Operate</span>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-navy mt-2 mb-4">
          Nationwide Coverage
        </h2>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          From Alaska to Florida, Maine to Hawaii — we move families and businesses in all 50 states.
        </p>
      </motion.div>

      <motion.div variants={fadeUpVariant} className="rounded-3xl overflow-hidden shadow-card border border-gray-100 bg-white p-6 mb-10">
        <USAMapSVG />
      </motion.div>

      {/* City pills */}
      <motion.div variants={fadeUpVariant} className="text-center">
        <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-5">Popular Service Cities</p>
        <div className="flex flex-wrap justify-center gap-2">
          {topCities.map((city) => (
            <Badge key={city} variant="orange" className="text-sm">
              {city}
            </Badge>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
