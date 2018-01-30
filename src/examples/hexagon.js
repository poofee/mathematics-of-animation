import React, { Component } from 'react';
import anime from 'animejs';

const rad = angle => Math.PI * angle / 180;

const point = (o, r, theta) => [
  o[0] + r * Math.cos(theta),
  o[1] + r * Math.sin(theta),
];

const side = (o, r, theta1, theta2) =>
  `M${point(o, r, rad(theta1))} L ${point(o, r, rad(theta2))}`;

const angleIndicator = (o, r, theta) =>
  `${point(o, 0, 0)} ${point(o, r, rad(theta))}`;

export class Hexagon extends Component {
  componentDidMount() {
    anime({
      targets: [this.side1, this.side2, this.side3, this.side4, this.side5],
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutQuad',
      duration: 1500,
      delay: (el, i) => (i + 1) * 1500,
      loop: true,
    });
    // anime({
    //   targets: this.line,
    //   points: [
    //     {
    //       value: angleIndicator([50, 50], 45, -45),
    //     },
    //     {
    //       value: angleIndicator([50, 50], 45, -90),
    //     },
    //     {
    //       value: angleIndicator([50, 50], 45, -135),
    //     },
    //     {
    //       value: angleIndicator([50, 50], 45, -180),
    //     },
    //     {
    //       value: angleIndicator([50, 50], 45, -225),
    //     },
    //     {
    //       value: angleIndicator([50, 50], 45, -270),
    //     },
    //     {
    //       value: angleIndicator([50, 50], 45, -315),
    //     },
    //     {
    //       value: angleIndicator([50, 50], 45, -360),
    //     },
    //   ],
    //   easing: 'easeInOutQuad',
    //   duration: 12000,
    //   delay: 1500,
    //   loop: true,
    // });
    // const angle = { value: 0 };
    // anime({
    //   targets: angle,
    //   value: [
    //     { value: 1 },
    //     { value: 2 },
    //     { value: 3 },
    //     { value: 4 },
    //     { value: 5 },
    //     { value: 6 },
    //     { value: 7 },
    //     { value: 8 },
    //   ],
    //   easing: 'easeInOutQuad',
    //   duration: 12000,
    //   delay: 1500,
    //   loop: true,
    //   update: () => {
    //     const t = parseInt(angle.value, 10) * 45;
    //     if (this.angle) {
    //       this.angle.textContent = `θ = ${t}°`;
    //     }
    //     if (this.coordsX && this.coordsY) {
    //       this.coordsX.textContent = `x = r * cos(${t}°)`;
    //       this.coordsY.textContent = `y = r * sin(${t}°)`;
    //     }
    //   },
    // });
  }

  render() {
    const r = 40;
    const o = [50, 50];

    return (
      <svg viewBox="0 0 198 192" {...this.props}>
        <defs>
          <path
            id="a"
            d="M76.889 90.401H18.575L.555 34.938 47.732.661l47.177 34.277z"
          />
        </defs>
        <g fill="none" fillRule="evenodd">
          <path
            d="M105.867 95.28c0-3.912-3.175-7.087-7.087-7.087s-7.087 3.175-7.087 7.087 3.175 7.087 7.087 7.087 7.087-3.175 7.087-7.087m7.026 0c0-7.824-6.349-14.173-14.173-14.173S84.547 87.456 84.547 95.28s6.349 14.173 14.173 14.173 14.173-6.349 14.173-14.173m7.087 0c0-11.735-9.525-21.26-21.26-21.26-11.735 0-21.26 9.525-21.26 21.26 0 11.735 9.525 21.26 21.26 21.26 11.735 0 21.26-9.525 21.26-21.26m7.086 0c0-15.647-12.699-28.346-28.346-28.346S70.374 79.633 70.374 95.28s12.699 28.346 28.346 28.346 28.346-12.699 28.346-28.346m7.087 0c0-19.559-15.874-35.433-35.433-35.433-19.559 0-35.433 15.874-35.433 35.433 0 19.559 15.874 35.433 35.433 35.433 19.559 0 35.433-15.874 35.433-35.433m7.087 0c0-23.471-19.049-42.52-42.52-42.52-23.471 0-42.52 19.049-42.52 42.52 0 23.471 19.049 42.52 42.52 42.52 23.471 0 42.52-19.049 42.52-42.52m7.086 0c0-27.383-22.223-49.606-49.606-49.606-27.383 0-49.606 22.223-49.606 49.606 0 27.383 22.223 49.606 49.606 49.606 27.383 0 49.606-22.223 49.606-49.606m7.087-.06c0-31.294-25.399-56.693-56.693-56.693-31.294 0-56.693 25.399-56.693 56.693 0 31.294 25.399 56.693 56.693 56.693 31.294 0 56.693-25.399 56.693-56.693"
            stroke="#0F0"
            strokeWidth=".499"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M183.772 95.268h-85.04"
            stroke="#F0F"
            strokeWidth=".499"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            fontFamily="CourierCE, Courier"
            fontSize="6"
            fill="#000"
            transform="translate(0 -3)"
          >
            <tspan x="187.153" y="100.212">
              360°
            </tspan>
          </text>
          <path
            d="M172.379 52.748l-73.647 42.52"
            stroke="#F0F"
            strokeWidth=".499"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            fontFamily="CourierCE, Courier"
            fontSize="6"
            fill="#000"
            transform="translate(0 -3)"
          >
            <tspan x="176.455" y="53.394">
              30°
            </tspan>
          </text>
          <path
            d="M141.252 21.621l-42.52 73.647"
            stroke="#F0F"
            strokeWidth=".499"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            fontFamily="CourierCE, Courier"
            fontSize="6"
            fill="#000"
            transform="translate(0 -3)"
          >
            <tspan x="142.196" y="19.195">
              60°
            </tspan>
          </text>
          <path
            d="M98.732 10.228v85.04"
            stroke="#F0F"
            strokeWidth=".499"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            fontFamily="CourierCE, Courier"
            fontSize="6"
            fill="#000"
            transform="translate(0 -3)"
          >
            <tspan x="95.438" y="7">
              90°
            </tspan>
          </text>
          <path
            d="M56.213 21.621l42.519 73.647"
            stroke="#F0F"
            strokeWidth=".499"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            fontFamily="CourierCE, Courier"
            fontSize="6"
            fill="#000"
            transform="translate(0 -3)"
          >
            <tspan x="46.881" y="19.195">
              120°
            </tspan>
          </text>
          <path
            d="M25.085 52.748l73.647 42.52"
            stroke="#F0F"
            strokeWidth=".499"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            fontFamily="CourierCE, Courier"
            fontSize="6"
            fill="#000"
            transform="translate(0 -3)"
          >
            <tspan x="12.621" y="53.394">
              150°
            </tspan>
          </text>
          <path
            d="M13.693 95.268h85.039"
            stroke="#F0F"
            strokeWidth=".499"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            fontFamily="CourierCE, Courier"
            fontSize="6"
            fill="#000"
            transform="translate(0 -3)"
          >
            <tspan x=".064" y="100.212">
              180°
            </tspan>
          </text>
          <path
            d="M25.085 137.787l73.647-42.519"
            stroke="#F0F"
            strokeWidth=".499"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            fontFamily="CourierCE, Courier"
            fontSize="6"
            fill="#000"
            transform="translate(0 -3)"
          >
            <tspan x="12.621" y="146.969">
              210°
            </tspan>
          </text>
          <path
            d="M56.213 168.915l42.519-73.647"
            stroke="#F0F"
            strokeWidth=".499"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            fontFamily="CourierCE, Courier"
            fontSize="6"
            fill="#000"
            transform="translate(0 -3)"
          >
            <tspan x="46.881" y="181.229">
              240°
            </tspan>
          </text>
          <path
            d="M98.732 180.307V95.268"
            stroke="#F0F"
            strokeWidth=".499"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            fontFamily="CourierCE, Courier"
            fontSize="6"
            fill="#000"
            transform="translate(0 -3)"
          >
            <tspan x="93.638" y="193.726">
              270°
            </tspan>
          </text>
          <path
            d="M141.252 168.915l-42.52-73.647"
            stroke="#F0F"
            strokeWidth=".499"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            fontFamily="CourierCE, Courier"
            fontSize="6"
            fill="#000"
            transform="translate(0 -3)"
          >
            <tspan x="140.396" y="181.229">
              300°
            </tspan>
          </text>
          <path
            d="M172.379 137.787L98.732 95.268"
            stroke="#F0F"
            strokeWidth=".499"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            fontFamily="CourierCE, Courier"
            fontSize="6"
            fill="#000"
            transform="translate(0 -3)"
          >
            <tspan x="174.655" y="146.969">
              330°
            </tspan>
          </text>
          <g transform="translate(51 45)">
            <use xlinkHref="#a" fill="#fff" stroke="#333" strokeWidth="0.5" />
            <mask id="b" fill="#fff">
              <use xlinkHref="#a" />
            </mask>
            <path
              d="M76.889 90.401H18.575L.555 34.938 47.732.661l47.177 34.277-18.02 55.463zm-312.621-40.133L47.732-233.196-235.732 50.268zm3.006 3.006L50.738-230.19-232.726 53.274zm3.007 3.007L53.745-227.183-229.719 56.281zm3.007 3.007L56.751-224.176-226.712 59.288zm3.006 3.006L59.758-221.17-223.706 62.294zm3.007 3.007L62.765-218.163-220.699 65.301zm3.006 3.006L65.771-215.157-217.693 68.307zm3.007 3.007L68.778-212.15-214.686 71.314zm3.006 3.006L71.784-209.143-211.68 74.32zm3.007 3.007L74.791-206.137-208.673 77.327zm3.007 3.007L77.798-203.13-205.666 80.334zm3.006 3.006L80.804-200.124-202.66 83.34zm3.007 3.007L83.811-197.117-199.653 86.347zm3.006 3.006L86.817-194.11-196.647 89.353zm3.007 3.007L89.824-191.104-193.64 92.36zm3.007 3.007L92.83-188.097-190.633 95.367zm3.006 3.006L95.837-185.091-187.627 98.373zm3.007 3.007L98.844-182.084-184.62 101.38zm3.006 3.006L101.85-179.077l-283.464 283.463zm3.007 3.007l283.464-283.464-283.464 283.464zm3.007 3.007l283.463-283.464L-175.6 110.4zm3.006 3.006L110.87-170.058l-283.464 283.464zm3.007 3.007l283.464-283.464-283.464 283.464zm3.006 3.006l283.464-283.463-283.464 283.463zm3.007 3.007L119.89-161.038l-283.464 283.464zm3.007 3.007l283.463-283.464-283.463 283.464zm3.006 3.006l283.464-283.464-283.464 283.464zm3.007 3.007L128.91-152.018l-283.464 283.464zm3.006 3.006l283.464-283.463-283.464 283.463zm3.007 3.007l283.464-283.464-283.464 283.464zm3.007 3.007l283.463-283.464-283.463 283.464zm3.006 3.006l283.464-283.464-283.464 283.464zm3.007 3.007l283.464-283.464-283.464 283.464zm3.006 3.006l283.464-283.463-283.464 283.463zm3.007 3.007l283.464-283.464-283.464 283.464zm3.007 3.007l283.463-283.464-283.463 283.464zm3.006 3.006l283.464-283.464-283.464 283.464zm3.007 3.007l283.464-283.464-283.464 283.464zm3.006 3.006l283.464-283.463-283.464 283.463zm3.007 3.007l283.464-283.464-283.464 283.464zm3.007 3.007l283.463-283.464-283.463 283.464zm3.006 3.006l283.464-283.464-283.464 283.464zm3.007 3.007l283.464-283.464-283.464 283.464zm3.006 3.006l283.464-283.463-283.464 283.463zm3.007 3.007l283.464-283.464-283.464 283.464zm3.007 3.007L183.028-97.899l-283.463 283.464zm3.006 3.006L186.035-94.893-97.429 188.571zm3.007 3.007L189.042-91.886-94.422 191.578zm3.006 3.006L192.048-88.879-91.416 194.584zm3.007 3.007L195.055-85.873-88.409 197.591zm3.007 3.007L198.061-82.866-85.402 200.598zm3.006 3.006L201.068-79.86-82.396 203.604zm3.007 3.007L204.075-76.853-79.389 206.611zm3.006 3.006L207.081-73.846-76.383 209.617zm3.007 3.007L210.088-70.84-73.376 212.624zm3.007 3.007L213.094-67.833-70.369 215.631zm3.006 3.006L216.101-64.827-67.363 218.637zm3.007 3.007L219.108-61.82-64.356 221.644zm3.006 3.006L222.114-58.814-61.35 224.65zm3.007 3.007L225.121-55.807-58.343 227.657zm3.006 3.006L228.127-52.8-55.337 230.663zm3.007 3.007L231.134-49.794-52.33 233.67zm3.007 3.007L234.141-46.787-49.323 236.677zm3.006 3.006L237.147-43.781-46.317 239.683zm3.007 3.007L240.154-40.774-43.31 242.69zm3.006 3.006L243.16-37.767-40.304 245.696zm3.007 3.007L246.167-34.761-37.297 248.703zm3.007 3.007L249.173-31.754-34.29 251.71zm3.006 3.006L252.18-28.748-31.284 254.716zm3.007 3.007L255.187-25.741-28.277 257.723zm3.006 3.006L258.193-22.734-25.271 260.729zm3.007 3.007L261.2-19.728-22.264 263.736zm3.007 3.007L264.206-16.721-19.257 266.743zm3.006 3.006L267.213-13.715-16.251 269.749zm3.007 3.007L270.219-10.708-13.244 272.756zm3.006 3.006L273.226-7.702-10.238 275.762zm3.007 3.007L276.233-4.695-7.231 278.769zm3.006 3.006L279.239-1.688-4.225 281.775zm3.007 3.007L282.246 1.318-1.218 284.782zm3.007 3.007L285.253 4.325 1.789 287.789zm3.006 3.006L288.259 7.331 4.795 290.795zm3.007 3.007L291.266 10.338 7.802 293.802zm3.006 3.006L294.272 13.345 10.808 296.808zm3.007 3.007L297.279 16.351 13.815 299.815zm3.007 3.007L300.285 19.358 16.822 302.822zm3.006 3.006L303.292 22.364 19.828 305.828zm3.007 3.007L306.299 25.371 22.835 308.835zm3.006 3.006L309.305 28.378 25.841 311.841zm3.007 3.007L312.312 31.384 28.848 314.848zm3.007 3.007L315.318 34.391 31.855 317.855zm3.006 3.006L318.325 37.397 34.861 320.861zm3.007 3.007L321.332 40.404 37.868 323.868zm3.006 3.006L324.338 43.41 40.874 326.874zm3.007 3.007L327.345 46.417 43.881 329.881zm3.006 3.006L330.351 49.424 46.887 332.887z"
              stroke="#333"
              strokeWidth=".499"
              strokeLinecap="round"
              strokeLinejoin="round"
              mask="url(#b)"
            />
          </g>
        </g>
        <g
          stroke="blue"
          fill="white"
          strokeWidth="2"
          strokeLinecap="round"
          transform="translate(51 45)"
        >
          {/* <path d="M76.889,90.401H18.575L0.555,34.938L47.732,0.661L94.90899999999999,34.938Z" /> */}

          <path
            ref={side1 => {
              this.side1 = side1;
            }}
            d="M94.90899999999999,34.938 L47.732,0.661"
          />
          <path
            ref={side2 => {
              this.side2 = side2;
            }}
            d="M47.732,0.661 L0.555,34.938"
          />
          <path
            ref={side3 => {
              this.side3 = side3;
            }}
            d="M0.555 34.938 L18.575,90.401"
          />
          <path
            ref={side4 => {
              this.side4 = side4;
            }}
            d="M18.575, 90.401 L76.889 90.401"
          />
          <path
            ref={side5 => {
              this.side5 = side5;
            }}
            d="M76.889 90.401 L94.90899999999999,34.938"
          />
        </g>
      </svg>
    );
  }
}

// <svg viewBox="0 0 100 100" height="600" fill="none">
// <path d="M50,0 L50,100" stroke="#F0F" strokeWidth="0.5" />
// <path d="M0,50 L100,50" stroke="#F0F" strokeWidth="0.5" />
// <circle
//   id="circle"
//   cx="50"
//   cy="50"
//   r={r}
//   strokeWidth="0.5"
//   stroke="#0F0"
// />
// <polygon
//   ref={line => {
//     this.line = line;
//   }}
//   strokeWidth="0.5"
//   stroke="#000"
//   points={angleIndicator([50, 50], 45, 0)}
// />
// <text
//   ref={angle => {
//     this.angle = angle;
//   }}
//   x="55"
//   y="58"
//   fontFamily="monospace"
//   fontSize="6"
//   fill="#000"
// />
// <g stroke="#000" strokeLinecap="round">
//   <path
//     ref={side1 => {
//       this.side1 = side1;
//     }}
//     d={side(o, r, 0, -45)}
//   />
//   <path
//     ref={side2 => {
//       this.side2 = side2;
//     }}
//     d={side(o, r, -45, -90)}
//   />
//   <path
//     ref={side3 => {
//       this.side3 = side3;
//     }}
//     d={side(o, r, -90, -135)}
//   />
//   <path
//     ref={side4 => {
//       this.side4 = side4;
//     }}
//     d={side(o, r, -135, -180)}
//   />
//   <path
//     ref={side5 => {
//       this.side5 = side5;
//     }}
//     d={side(o, r, -180, -225)}
//   />
//   <path
//     ref={side6 => {
//       this.side6 = side6;
//     }}
//     d={side(o, r, -225, -270)}
//   />
//   <path
//     ref={side7 => {
//       this.side7 = side7;
//     }}
//     d={side(o, r, -270, -315)}
//   />
//   <path
//     ref={side8 => {
//       this.side8 = side8;
//     }}
//     d={side(o, r, -315, -360)}
//   />
// </g>
// <rect x="0" y="76" fill="#fff" width="100" height="12" />
// <text
//   ref={coords => {
//     this.coordsX = coords;
//   }}
//   textAnchor="middle"
//   x="50"
//   y="80"
//   fontFamily="monospace"
//   fontSize="4"
//   fill="#000"
// />
// <text
//   ref={coords => {
//     this.coordsY = coords;
//   }}
//   textAnchor="middle"
//   x="50"
//   y="86"
//   fontFamily="monospace"
//   fontSize="4"
//   fill="#000"
// />
// </svg>