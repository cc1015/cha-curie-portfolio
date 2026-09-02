
const HUES = {
  green: "#6aa17a",
  purple: "#a98cc4",
  rust: "#cf7361",
  amber: "#d3a24a",
  blue: "#7fa8c9",
};

const VIEWBOX = "0 0 320 120";

type PlateProps = { className?: string };

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox={VIEWBOX}
      className="block w-full"
      role="presentation"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function Tick({
  x,
  y,
  children,
  anchor = "middle",
}: {
  x: number;
  y: number;
  children: React.ReactNode;
  anchor?: "start" | "middle" | "end";
}) {
  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      fontSize="6"
      fontFamily="ui-monospace, Menlo, monospace"
      fill="currentColor"
      opacity="0.45"
    >
      {children}
    </text>
  );
}

function noise(i: number, j = 0) {
  const v = Math.sin(i * 12.9898 + j * 78.233) * 43758.5453;
  return v - Math.floor(v);
}

const DOMAINS = [
  { start: 0, end: 26, hue: HUES.purple },
  { start: 26, end: 62, hue: HUES.green },
  { start: 62, end: 71, hue: HUES.rust },
  { start: 71, end: 100, hue: HUES.purple },
];

const LANES = [
  { label: "MOUSE", gaps: [[34, 39]] },
  { label: "MACAC", gaps: [[12, 15]] },
  { label: "GALLU", gaps: [[48, 56], [88, 93]] },
];

export function DomainTrackPlate({ className }: PlateProps) {
  const x = (pct: number) => 44 + (pct / 100) * 258;

  return (
    <div className={className}>
      <Frame>
        <text
          x="40"
          y="26"
          textAnchor="end"
          fontSize="6"
          fontFamily="ui-monospace, Menlo, monospace"
          fill="currentColor"
          opacity="0.6"
        >
          HUMAN
        </text>
        {DOMAINS.map((d) => (
          <rect
            key={d.start}
            x={x(d.start)}
            y={16}
            width={x(d.end) - x(d.start)}
            height={12}
            fill={d.hue}
            opacity="0.85"
          />
        ))}
        <rect
          x={x(0)}
          y={16}
          width={x(100) - x(0)}
          height={12}
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.35"
          strokeWidth="0.6"
        />

        {LANES.map((lane, i) => {
          const y = 40 + i * 14;
          return (
            <g key={lane.label}>
              <text
                x="40"
                y={y + 6}
                textAnchor="end"
                fontSize="6"
                fontFamily="ui-monospace, Menlo, monospace"
                fill="currentColor"
                opacity="0.45"
              >
                {lane.label}
              </text>
              <rect
                x={x(0)}
                y={y}
                width={x(100) - x(0)}
                height={7}
                fill="currentColor"
                opacity="0.14"
              />
              {lane.gaps.map(([g0, g1]) => (
                <rect
                  key={g0}
                  x={x(g0)}
                  y={y}
                  width={x(g1) - x(g0)}
                  height={7}
                  fill="var(--background)"
                />
              ))}
            </g>
          );
        })}

        <line
          x1={x(0)}
          y1={90}
          x2={x(100)}
          y2={90}
          stroke="currentColor"
          strokeOpacity="0.35"
          strokeWidth="0.6"
        />
        {[0, 25, 50, 75, 100].map((pct) => (
          <g key={pct}>
            <line
              x1={x(pct)}
              y1={90}
              x2={x(pct)}
              y2={94}
              stroke="currentColor"
              strokeOpacity="0.35"
              strokeWidth="0.6"
            />
            <Tick x={x(pct)} y={104}>
              {Math.round((pct / 100) * 731) || 1}
            </Tick>
          </g>
        ))}
        <Tick x={x(50)} y={116}>
          RESIDUE
        </Tick>
      </Frame>
    </div>
  );
}

const HITS = [
  [4, 2],
  [5, 2],
  [6, 2],
  [9, 5],
];

export function HeatGridPlate({ className }: PlateProps) {
  const cols = 16;
  const rows = 7;
  const cell = 14;
  const x0 = 48;
  const y0 = 10;

  return (
    <div className={className}>
      <Frame>
        {Array.from({ length: rows }).map((_, r) =>
          Array.from({ length: cols }).map((_, c) => {
            const hit = HITS.some(([hc, hr]) => hc === c && hr === r);
            const centre =
              1 -
              (Math.abs(c - cols / 2) / cols + Math.abs(r - rows / 2) / rows);
            const heat = Math.min(1, centre * 0.9 + noise(c, r) * 0.35);
            return (
              <rect
                key={`${c}-${r}`}
                x={x0 + c * cell}
                y={y0 + r * cell}
                width={cell - 1.5}
                height={cell - 1.5}
                fill={hit ? HUES.rust : HUES.amber}
                opacity={hit ? 0.9 : 0.1 + heat * 0.6}
              />
            );
          })
        )}
        {HITS.map(([c, r]) => (
          <g
            key={`x-${c}-${r}`}
            stroke="var(--background)"
            strokeWidth="1.2"
            opacity="0.9"
          >
            <line
              x1={x0 + c * cell + 3.5}
              y1={y0 + r * cell + 3.5}
              x2={x0 + c * cell + cell - 5}
              y2={y0 + r * cell + cell - 5}
            />
            <line
              x1={x0 + c * cell + cell - 5}
              y1={y0 + r * cell + 3.5}
              x2={x0 + c * cell + 3.5}
              y2={y0 + r * cell + cell - 5}
            />
          </g>
        ))}
        {["A", "B", "C", "D", "E", "F", "G"].map((label, r) => (
          <Tick key={label} x={x0 - 6} y={y0 + r * cell + 9} anchor="end">
            {label}
          </Tick>
        ))}
        {[1, 4, 7, 10, 13, 16].map((c) => (
          <Tick key={c} x={x0 + (c - 1) * cell + 6.5} y={y0 + rows * cell + 8}>
            {c}
          </Tick>
        ))}
      </Frame>
    </div>
  );
}

const FIRES = [18, 24, 21, 33, 30, 46, 41, 58, 54, 72, 68, 84];
const VISITS = [26, 29, 27, 38, 36, 44, 47, 52, 57, 63, 66, 76];

export function TimeSeriesPlate({ className }: PlateProps) {
  const x0 = 34;
  const x1 = 306;
  const yTop = 14;
  const yBase = 92;
  const px = (i: number) => x0 + (i / (FIRES.length - 1)) * (x1 - x0);
  const py = (v: number) => yBase - (v / 90) * (yBase - yTop);
  const path = (series: number[]) =>
    series.map((v, i) => `${i ? "L" : "M"}${px(i)} ${py(v)}`).join(" ");

  return (
    <div className={className}>
      <Frame>
        {[0, 30, 60, 90].map((v) => (
          <g key={v}>
            <line
              x1={x0}
              y1={py(v)}
              x2={x1}
              y2={py(v)}
              stroke="currentColor"
              strokeOpacity={v === 0 ? 0.35 : 0.12}
              strokeWidth="0.6"
            />
            <Tick x={x0 - 5} y={py(v) + 2} anchor="end">
              {v}
            </Tick>
          </g>
        ))}

        <path
          d={`${path(FIRES)} L${x1} ${py(0)} L${x0} ${py(0)} Z`}
          fill={HUES.rust}
          opacity="0.14"
        />
        <path
          d={path(FIRES)}
          fill="none"
          stroke={HUES.rust}
          strokeWidth="1.4"
        />
        <path
          d={path(VISITS)}
          fill="none"
          stroke={HUES.blue}
          strokeWidth="1.4"
          strokeDasharray="3 2"
        />
        {VISITS.map((v, i) => (
          <circle key={i} cx={px(i)} cy={py(v)} r="1.4" fill={HUES.blue} />
        ))}

        {["2012", "2016", "2020", "2023"].map((year, i) => (
          <Tick key={year} x={px(i * 3.66)} y={102}>
            {year}
          </Tick>
        ))}

        <line
          x1={x0}
          y1={114}
          x2={x0 + 10}
          y2={114}
          stroke={HUES.rust}
          strokeWidth="1.4"
        />
        <Tick x={x0 + 14} y={116} anchor="start">
          FIRES
        </Tick>
        <line
          x1={x0 + 62}
          y1={114}
          x2={x0 + 72}
          y2={114}
          stroke={HUES.blue}
          strokeWidth="1.4"
          strokeDasharray="3 2"
        />
        <Tick x={x0 + 76} y={116} anchor="start">
          ED VISITS
        </Tick>
      </Frame>
    </div>
  );
}

export function SmallMultiplesPlate({ className }: PlateProps) {
  const w = 72;
  const h = 46;
  const gap = 8;
  const x0 = 76;
  const y0 = 10;

  const panels = [0, 1, 2, 3].map((i) => ({
    x: x0 + (i % 2) * (w + gap),
    y: y0 + Math.floor(i / 2) * (h + gap),
  }));
  const [scatter, bars, network, dots] = panels;

  return (
    <div className={className}>
      <Frame>
        {panels.map((p, i) => (
          <rect
            key={i}
            x={p.x}
            y={p.y}
            width={w}
            height={h}
            fill="var(--well)"
            stroke="currentColor"
            strokeOpacity="0.25"
            strokeWidth="0.6"
          />
        ))}

        {Array.from({ length: 16 }).map((_, i) => (
          <circle
            key={i}
            cx={scatter.x + 6 + noise(i) * (w - 12)}
            cy={scatter.y + 6 + noise(i, 3) * (h - 12)}
            r="1.3"
            fill={HUES.green}
            opacity="0.8"
          />
        ))}
        <line
          x1={scatter.x + 5}
          y1={scatter.y + h - 8}
          x2={scatter.x + w - 5}
          y2={scatter.y + 9}
          stroke="currentColor"
          strokeOpacity="0.5"
          strokeWidth="0.8"
        />

        {[0.35, 0.6, 0.45, 0.8, 0.55, 0.95].map((v, i) => (
          <rect
            key={i}
            x={bars.x + 7 + i * 10}
            y={bars.y + h - 6 - v * (h - 14)}
            width={7}
            height={v * (h - 14)}
            fill={HUES.amber}
            opacity="0.8"
          />
        ))}

        {(() => {
          const nodes = Array.from({ length: 7 }, (_, i) => ({
            x: network.x + 10 + noise(i, 7) * (w - 20),
            y: network.y + 9 + noise(i, 11) * (h - 18),
          }));
          const edges = [
            [0, 1],
            [1, 2],
            [2, 3],
            [3, 0],
            [1, 4],
            [4, 5],
            [5, 6],
            [6, 2],
          ];
          return (
            <>
              {edges.map(([a, b]) => (
                <line
                  key={`${a}-${b}`}
                  x1={nodes[a].x}
                  y1={nodes[a].y}
                  x2={nodes[b].x}
                  y2={nodes[b].y}
                  stroke="currentColor"
                  strokeOpacity="0.35"
                  strokeWidth="0.6"
                />
              ))}
              {nodes.map((n, i) => (
                <circle
                  key={i}
                  cx={n.x}
                  cy={n.y}
                  r="2.4"
                  fill={HUES.purple}
                  opacity="0.9"
                />
              ))}
            </>
          );
        })()}

        {Array.from({ length: 40 }).map((_, i) => (
          <circle
            key={i}
            cx={dots.x + 5 + noise(i, 17) * (w - 10)}
            cy={dots.y + 5 + noise(i, 23) * (h - 10)}
            r={0.8 + noise(i, 29) * 1.6}
            fill={HUES.green}
            opacity="0.55"
          />
        ))}

        {["i", "ii", "iii", "iv"].map((n, i) => (
          <Tick key={n} x={panels[i].x - 4} y={panels[i].y + 7} anchor="end">
            {n}
          </Tick>
        ))}
      </Frame>
    </div>
  );
}

const ENTRIES: Record<number, { hue: string; n: number }> = {
  3: { hue: HUES.green, n: 1 },
  5: { hue: HUES.amber, n: 2 },
  9: { hue: HUES.purple, n: 1 },
  11: { hue: HUES.green, n: 3 },
  16: { hue: HUES.blue, n: 2 },
  17: { hue: HUES.amber, n: 1 },
  22: { hue: HUES.purple, n: 2 },
  26: { hue: HUES.rust, n: 1 },
  30: { hue: HUES.green, n: 2 },
};

export function CalendarPlate({ className }: PlateProps) {
  const cols = 7;
  const rows = 5;
  const cw = 30;
  const ch = 17;
  const x0 = 48;
  const y0 = 22;

  return (
    <div className={className}>
      <Frame>
        {["M", "T", "W", "T", "F", "S", "S"].map((d, c) => (
          <Tick key={c} x={x0 + c * cw + cw / 2} y={y0 - 5}>
            {d}
          </Tick>
        ))}
        {Array.from({ length: rows }).map((_, r) =>
          Array.from({ length: cols }).map((_, c) => {
            const day = r * cols + c + 1;
            const entry = ENTRIES[day];
            return (
              <g key={day}>
                <rect
                  x={x0 + c * cw}
                  y={y0 + r * ch}
                  width={cw}
                  height={ch}
                  fill={entry ? "var(--well)" : "none"}
                  stroke="currentColor"
                  strokeOpacity="0.2"
                  strokeWidth="0.6"
                />
                <Tick x={x0 + c * cw + 3} y={y0 + r * ch + 7} anchor="start">
                  {day}
                </Tick>
                {entry &&
                  Array.from({ length: entry.n }).map((_, i) => (
                    <rect
                      key={i}
                      x={x0 + c * cw + 3}
                      y={y0 + r * ch + 9.5 + i * 2.4}
                      width={cw - 6}
                      height={1.6}
                      fill={entry.hue}
                      opacity="0.85"
                    />
                  ))}
              </g>
            );
          })
        )}
        <Tick x={44} y={y0 + 7} anchor="end">
          WK1
        </Tick>
        <Tick x={44} y={y0 + ch + 7} anchor="end">
          WK2
        </Tick>
        <Tick x={44} y={y0 + 2 * ch + 7} anchor="end">
          WK3
        </Tick>
        <Tick x={44} y={y0 + 3 * ch + 7} anchor="end">
          WK4
        </Tick>
        <Tick x={44} y={y0 + 4 * ch + 7} anchor="end">
          WK5
        </Tick>
      </Frame>
    </div>
  );
}

export function DocStackPlate({ className }: PlateProps) {
  return (
    <div className={className}>
      <Frame>
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <line
              x1={24}
              y1={18 + i * 20}
              x2={34}
              y2={18 + i * 20}
              stroke="currentColor"
              strokeOpacity="0.35"
              strokeWidth="0.6"
            />
            <rect
              x={34}
              y={12 + i * 20}
              width={54}
              height={13}
              fill="var(--well)"
              stroke="currentColor"
              strokeOpacity="0.25"
              strokeWidth="0.6"
            />
            <rect
              x={38}
              y={16 + i * 20}
              width={22}
              height={1.8}
              fill="currentColor"
              opacity="0.4"
            />
            <rect
              x={38}
              y={19.5 + i * 20}
              width={38}
              height={1.8}
              fill={HUES.blue}
              opacity="0.7"
            />
          </g>
        ))}
        <line
          x1={24}
          y1={18}
          x2={24}
          y2={78}
          stroke="currentColor"
          strokeOpacity="0.35"
          strokeWidth="0.6"
        />
        <Tick x={61} y={104}>
          *.MD
        </Tick>

        <line
          x1={96}
          y1={48}
          x2={124}
          y2={48}
          stroke="currentColor"
          strokeOpacity="0.5"
          strokeWidth="0.8"
        />
        <path d="M124 48 L119 45.5 L119 50.5 Z" fill="currentColor" opacity="0.5" />

        {[2, 1, 0].map((i) => (
          <rect
            key={i}
            x={134 + i * 7}
            y={22 + i * 6}
            width={150}
            height={54}
            fill="var(--background)"
            stroke="currentColor"
            strokeOpacity={i === 0 ? 0.45 : 0.22}
            strokeWidth="0.6"
          />
        ))}
        <rect x={142} y={32} width={62} height={2.4} fill="currentColor" opacity="0.55" />
        <rect x={142} y={40} width={112} height={2} fill="currentColor" opacity="0.22" />
        <rect x={142} y={46} width={96} height={2} fill="currentColor" opacity="0.22" />
        <rect x={142} y={52} width={104} height={2} fill="currentColor" opacity="0.22" />
        {[HUES.green, HUES.amber, HUES.rust].map((hue, i) => (
          <rect
            key={hue}
            x={142 + i * 14}
            y={62}
            width={10}
            height={4}
            fill={hue}
            opacity={i === 1 ? 0.9 : 0.35}
          />
        ))}
        <Tick x={209} y={104}>
          FLASHCARDS
        </Tick>
      </Frame>
    </div>
  );
}

const TAB_WIDTHS = [18, 26, 20, 24];

export function WireframePlate({ className }: PlateProps) {
  return (
    <div className={className}>
      <Frame>
        <rect
          x={30}
          y={10}
          width={260}
          height={92}
          fill="var(--well)"
          stroke="currentColor"
          strokeOpacity="0.3"
          strokeWidth="0.6"
        />
        <rect x={40} y={17} width={40} height={4} fill="currentColor" opacity="0.45" />
        {TAB_WIDTHS.map((w, i) => (
          <rect
            key={i}
            x={40 + TAB_WIDTHS.slice(0, i).reduce((sum, prev) => sum + prev + 7, 0)}
            y={26}
            width={w}
            height={5}
            fill={i === 1 ? HUES.amber : "currentColor"}
            opacity={i === 1 ? 0.85 : 0.22}
          />
        ))}
        <line
          x1={274}
          y1={16}
          x2={274}
          y2={28}
          stroke="currentColor"
          strokeOpacity="0.45"
          strokeWidth="0.6"
        />
        <circle cx={274} cy={31} r="3" fill={HUES.amber} opacity="0.85" />

        {[0, 1].map((c) =>
          [0, 1].map((r) => (
            <g key={`${c}-${r}`}>
              <rect
                x={40 + c * 122}
                y={42 + r * 28}
                width={110}
                height={22}
                fill="var(--background)"
                stroke="currentColor"
                strokeOpacity="0.25"
                strokeWidth="0.6"
              />
              <rect
                x={45 + c * 122}
                y={47 + r * 28}
                width={46}
                height={2.4}
                fill="currentColor"
                opacity="0.45"
              />
              <rect
                x={45 + c * 122}
                y={53 + r * 28}
                width={92}
                height={1.8}
                fill="currentColor"
                opacity="0.2"
              />
              <rect
                x={45 + c * 122}
                y={57.5 + r * 28}
                width={70}
                height={1.8}
                fill="currentColor"
                opacity="0.2"
              />
            </g>
          ))
        )}
        <Tick x={160} y={114}>
          VIEWPORT 1440 × 900
        </Tick>
      </Frame>
    </div>
  );
}
