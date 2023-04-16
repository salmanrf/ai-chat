interface Props {
  width?: string;
  height?: string;
  color?: string;
}

export function EditIcon({ width = "20", height = "20", color = "#000000" }: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="20" height="20" fill="white" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.2922 18.2831H11.248C10.903 18.2831 10.623 18.0031 10.623 17.6581C10.623 17.3131 10.903 17.0331 11.248 17.0331H17.2922C17.6372 17.0331 17.9172 17.3131 17.9172 17.6581C17.9172 18.0031 17.6372 18.2831 17.2922 18.2831"
        fill={color}
      />
      <mask
        id="mask0_167_1617"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="1"
        y="2"
        width="15"
        height="17"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1.66602 2.50012H15.9832V18.2831H1.66602V2.50012Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_167_1617)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.9246 4.18066L3.07874 13.9932C2.93624 14.1715 2.88374 14.4015 2.93624 14.6223L3.50374 17.0265L6.03624 16.9948C6.27708 16.9923 6.49958 16.8848 6.64708 16.7015C9.32791 13.3473 14.4387 6.95232 14.5837 6.76482C14.7204 6.54316 14.7737 6.22982 14.7021 5.92816C14.6287 5.61899 14.4362 5.35649 14.1587 5.18899C14.0996 5.14816 12.6954 4.05816 12.6521 4.02399C12.1237 3.60066 11.3529 3.67399 10.9246 4.18066V4.18066ZM3.01041 18.2832C2.72124 18.2832 2.46958 18.0848 2.40208 17.8023L1.71958 14.9098C1.57874 14.3107 1.71874 13.6923 2.10291 13.2123L9.95291 3.39399C9.95624 3.39066 9.95874 3.38649 9.96208 3.38316C10.8229 2.35399 12.3796 2.20232 13.4296 3.04482C13.4712 3.07732 14.8654 4.16066 14.8654 4.16066C15.3721 4.46232 15.7679 5.00149 15.9179 5.63982C16.0671 6.27149 15.9587 6.92316 15.6112 7.47399C15.5854 7.51482 15.5629 7.54982 7.62291 17.4832C7.24041 17.9598 6.66708 18.2373 6.05124 18.2448L3.01874 18.2832H3.01041Z"
          fill={color}
        />
      </g>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.5179 9.73735C13.3846 9.73735 13.2512 9.69485 13.1371 9.60818L8.59372 6.11818C8.32039 5.90818 8.26872 5.51652 8.47872 5.24152C8.68956 4.96818 9.08122 4.91735 9.35539 5.12735L13.8996 8.61652C14.1729 8.82652 14.2246 9.21902 14.0137 9.49318C13.8912 9.65318 13.7054 9.73735 13.5179 9.73735"
        fill={color}
      />
    </svg>
  );
}