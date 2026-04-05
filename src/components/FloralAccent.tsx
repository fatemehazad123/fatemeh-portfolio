interface FloralAccentProps {
  className?: string;
  color?: string;
  opacity?: number;
}

export default function FloralAccent({
  className = "",
  color = "#C96A4A",
  opacity = 0.12,
}: FloralAccentProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className={className}
      width="420"
      height="520"
      viewBox="0 0 420 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
    >
      {/* Large teal petal */}
      <ellipse
        cx="210"
        cy="180"
        rx="100"
        ry="170"
        fill="#4FA6A1"
        transform="rotate(-20 210 180)"
      />
      {/* Terra petal */}
      <ellipse
        cx="260"
        cy="260"
        rx="80"
        ry="150"
        fill={color}
        transform="rotate(30 260 260)"
      />
      {/* Small teal petal */}
      <ellipse
        cx="160"
        cy="320"
        rx="60"
        ry="110"
        fill="#4FA6A1"
        transform="rotate(-45 160 320)"
      />
      {/* Sage petal */}
      <ellipse
        cx="300"
        cy="150"
        rx="55"
        ry="100"
        fill="#BFCFC6"
        transform="rotate(15 300 150)"
      />
      {/* Small terra accent */}
      <ellipse
        cx="130"
        cy="210"
        rx="40"
        ry="75"
        fill={color}
        transform="rotate(-60 130 210)"
      />
      {/* Tiny teal dot */}
      <circle cx="320" cy="340" r="30" fill="#4FA6A1" />
      <circle cx="100" cy="400" r="20" fill={color} />
    </svg>
  );
}
