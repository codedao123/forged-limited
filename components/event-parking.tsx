'use client'

import { useState, type FormEvent } from 'react'
import { Check, Crown } from 'lucide-react'

type ParkingBay = {
  id: string
  x: number
  y: number
  width: number
  height: number
  type: 'general' | 'vip'
}

const vipBays = ['VIP 01', 'VIP 02', 'VIP 03', 'VIP 04']

const generalRows = [
  { row: 'G01-G12', offset: 0, count: 12, y: 230 },
  { row: 'G13-G24', offset: 12, count: 12, y: 310 },
  { row: 'G25-G36', offset: 24, count: 12, y: 390 },
  { row: 'G37-G48', offset: 36, count: 12, y: 470 },
  { row: 'G49-G60', offset: 48, count: 12, y: 550 },
]

const vipParking: ParkingBay[] = [
  { id: 'VIP 01', x: 720, y: 165, width: 76, height: 32, type: 'vip' },
  { id: 'VIP 02', x: 800, y: 165, width: 76, height: 32, type: 'vip' },
  { id: 'VIP 03', x: 880, y: 165, width: 76, height: 32, type: 'vip' },
  { id: 'VIP 04', x: 960, y: 165, width: 76, height: 32, type: 'vip' },
]

const generalParking: ParkingBay[] = generalRows.flatMap(({ count, offset, y }) =>
  Array.from({ length: count }, (_, index) => ({
    id: `G${String(index + offset + 1).padStart(2, '0')}`,
    x: 300 + index * 53,
    y,
    width: 38,
    height: 18,
    type: 'general' as const,
  })),
)

type DemoBooking = {
  space: string
  name: string
  vehicle: string
}

export function EventParking() {
  const [selectedSpace, setSelectedSpace] = useState<string | null>(null)
  const [bookings, setBookings] = useState<DemoBooking[]>([])
  const [driverName, setDriverName] = useState('')
  const [vehicle, setVehicle] = useState('')
  const [confirmation, setConfirmation] = useState('')
  const bookedSpaces = new Set(bookings.map((booking) => booking.space))

  function selectSpace(space: string) {
    setSelectedSpace(space)
    setConfirmation('')
  }

  function confirmDemoBooking(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!selectedSpace || !driverName.trim() || !vehicle.trim()) return

    setBookings((current) => [
      ...current,
      { space: selectedSpace, name: driverName.trim(), vehicle: vehicle.trim() },
    ])
    setConfirmation(`${selectedSpace} is held in this demo for ${driverName.trim()}.`)
    setSelectedSpace(null)
    setDriverName('')
    setVehicle('')
  }

  return (
    <div className="pt-14">
      <section aria-labelledby="parking-title">
        <div className="flex flex-col justify-between gap-5 border-b border-border pb-6 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              Parking preview / demo
            </p>
            <h2 id="parking-title" className="mt-3 text-2xl font-medium tracking-tight sm:text-3xl">
              Lot plan
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted-foreground">
            Based on the latest parking map reference, with live bay selection for the event preview.
          </p>
        </div>

        <div className="grid gap-10 py-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-12">
          <div className="min-w-0">
            <div className="mb-5 flex flex-wrap gap-x-6 gap-y-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground" aria-label="Parking space key">
              <span className="inline-flex items-center gap-2"><span className="h-3 w-3 border border-emerald-400" /> Available</span>
              <span className="inline-flex items-center gap-2"><span className="h-3 w-3 bg-foreground" /> Selected</span>
              <span className="inline-flex items-center gap-2"><span className="h-3 w-3 bg-muted" /> Booked in demo</span>
              <span className="inline-flex items-center gap-2"><span className="h-3 w-3 border border-amber-400 bg-amber-400/10" /> VIP lineup</span>
            </div>

            <div className="overflow-hidden border border-border bg-[#050505] p-2 sm:p-3">
              <svg viewBox="0 0 1200 760" className="h-[520px] w-full bg-[#050505]" role="img" aria-label="Parking lot plan">
                <rect width="1200" height="760" fill="#050505" />

                <g fill="none" stroke="#f5f5f5" strokeWidth="2" strokeLinejoin="miter">
                  <path d="M0 20 L260 20 L325 90 L325 700 L0 700 Z" />
                  <path d="M1200 20 L1110 20 L1015 120 L1015 700 L1200 700 Z" />
                  <path d="M848 50 L1200 50 L1200 250 L1040 250 L940 160 L848 160 Z" />
                  <path d="M300 150 L690 150 L690 240 L300 240 Z" />
                  <path d="M250 150 L180 150 L180 650 L250 650 L300 700 L480 700 L480 660 L330 660 L330 150 Z" />
                  <path d="M290 620 L710 620 L710 700 L290 700 Z" />
                  <path d="M880 180 L1030 180 L1035 640 L890 640 L890 610 L1010 610 L1000 220 L915 220 Z" />
                  <path d="M510 330 L790 330 L790 640 L510 640 Z" />
                  <path d="M620 180 L780 180 L820 220 L820 280 L640 280 L640 220 Z" />
                  <path d="M0 450 L150 450 L150 500 L0 500 Z" />
                  <path d="M55 305 L130 305 L130 355 L55 355 Z" />
                  <path d="M45 595 L145 595 L145 640 L45 640 Z" />
                  <path d="M325 720 L440 720 L440 760 L325 760 Z" />
                  <path d="M790 500 L1120 500 L1120 550 L790 550 Z" />
                </g>

                <g fill="none" stroke="#f5f5f5" strokeWidth="2" strokeDasharray="7 9">
                  <path d="M407 155 L407 635" />
                  <path d="M495 155 L495 635" />
                  <path d="M590 155 L590 635" />
                  <path d="M690 155 L690 635" />
                  <path d="M955 180 L955 640" />
                </g>

                <g fill="none" stroke="#f5f5f5" strokeWidth="2" strokeLinecap="round">
                  <path d="M880 130 L845 130" />
                  <path d="M890 190 L930 190" />
                  <path d="M860 610 L910 610" />
                  <path d="M675 635 L720 635" />
                  <path d="M850 705 L910 705" />
                  <path d="M130 710 L170 710" />
                  <path d="M90 340 L90 395" />
                  <path d="M560 585 L560 625" />
                  <path d="M670 585 L670 625" />
                </g>

                <g>
                  {vipParking.map((bay) => {
                    const isSelected = selectedSpace === bay.id
                    const isBooked = bookedSpaces.has(bay.id)

                    return (
                      <g key={bay.id} onClick={() => selectSpace(bay.id)} style={{ cursor: isBooked ? 'not-allowed' : 'pointer' }}>
                        <rect
                          x={bay.x}
                          y={bay.y}
                          width={bay.width}
                          height={bay.height}
                          fill={isBooked ? '#e5e7eb' : isSelected ? '#f5f5f5' : 'rgba(255,255,255,0.04)'}
                          stroke={isSelected ? '#050505' : isBooked ? '#d4d4d4' : '#f5f5f5'}
                          strokeWidth={isSelected ? 2.5 : 1.5}
                          rx={3}
                        />
                        <text
                          x={bay.x + bay.width / 2}
                          y={bay.y + bay.height / 2 + 4}
                          textAnchor="middle"
                          fontSize="11"
                          fontFamily="monospace"
                          fill={isSelected ? '#050505' : '#f5f5f5'}
                        >
                          {isBooked ? '✓' : bay.id}
                        </text>
                      </g>
                    )
                  })}

                  {generalParking.map((bay) => {
                    const isSelected = selectedSpace === bay.id
                    const isBooked = bookedSpaces.has(bay.id)

                    return (
                      <g key={bay.id} onClick={() => selectSpace(bay.id)} style={{ cursor: isBooked ? 'not-allowed' : 'pointer' }}>
                        <rect
                          x={bay.x}
                          y={bay.y}
                          width={bay.width}
                          height={bay.height}
                          fill={isBooked ? '#d4d4d4' : isSelected ? '#f5f5f5' : 'rgba(255,255,255,0.04)'}
                          stroke={isSelected ? '#050505' : isBooked ? '#d4d4d4' : '#f5f5f5'}
                          strokeWidth={isSelected ? 2.5 : 1.2}
                          rx={2}
                        />
                        <text
                          x={bay.x + bay.width / 2}
                          y={bay.y + bay.height / 2 + 4}
                          textAnchor="middle"
                          fontSize="10"
                          fontFamily="monospace"
                          fill={isSelected ? '#050505' : '#f5f5f5'}
                        >
                          {isBooked ? '✓' : bay.id}
                        </text>
                      </g>
                    )
                  })}
                </g>
              </svg>
            </div>

            <p className="mt-3 text-xs leading-5 text-muted-foreground">
              Final map geometry is mirrored in the preview; click any available bay to continue the demo booking flow.
            </p>
          </div>

          <aside className="border-y border-border py-5 lg:border-y-0 lg:border-l lg:pl-8 lg:py-0" aria-live="polite">
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              {selectedSpace ? `Book ${selectedSpace}` : 'Parking selection'}
            </h3>
            {selectedSpace ? (
              <form onSubmit={confirmDemoBooking} className="mt-5 space-y-4">
                <label className="block text-sm">
                  Driver name
                  <input
                    required
                    value={driverName}
                    onChange={(event) => setDriverName(event.target.value)}
                    className="mt-2 w-full border border-border bg-background px-3 py-3 text-sm outline-none focus:border-foreground"
                    autoComplete="name"
                  />
                </label>
                <label className="block text-sm">
                  Vehicle
                  <input
                    required
                    value={vehicle}
                    onChange={(event) => setVehicle(event.target.value)}
                    className="mt-2 w-full border border-border bg-background px-3 py-3 text-sm outline-none focus:border-foreground"
                    placeholder="Make and model"
                  />
                </label>
                <button type="submit" className="w-full bg-primary px-4 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-80">
                  Confirm demo booking
                </button>
                <button type="button" onClick={() => setSelectedSpace(null)} className="w-full border border-border px-4 py-3 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors hover:border-foreground">
                  Cancel
                </button>
              </form>
            ) : (
              <p className="mt-5 text-sm leading-6 text-muted-foreground">
                {confirmation || 'Choose an available bay to try the interactive booking flow.'}
              </p>
            )}
            <p className="mt-6 border-t border-border pt-5 text-xs leading-5 text-muted-foreground">
              VIP bays are reserved for the featured lineup and are not open for general selection.
            </p>
          </aside>
        </div>
      </section>

      <section className="mt-8 grid gap-10 border-y border-border py-10 lg:grid-cols-[0.8fr_1.2fr]" aria-labelledby="vip-title">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-amber-300">Featured parking</p>
          <h2 id="vip-title" className="mt-3 text-2xl font-medium tracking-tight">VIP lineup</h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Featured cars and VIP bay assignments will be announced with the event details.
          </p>
        </div>
        <ul className="grid grid-cols-2 gap-x-6 sm:grid-cols-4">
          {vipBays.map((space) => (
            <li key={space} className="border-t border-border py-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-300">{space}</p>
              <p className="mt-2 text-sm text-muted-foreground">Lineup to be announced</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}