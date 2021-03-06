import css from 'styled-jsx/css';
export default css`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .container {
    max-width: 1196px;
    min-height: 100vh;
    margin: 0 auto;
    padding: 4rem;
  }
  /* Font Family */
  *,
  .font-roboto {
    font-family: 'Roboto', sans-serif;
  }

  /* Text Size */
  .text-header {
    font-size: 4rem;
  }
  .text-subheader {
    font-size: 3rem;
  }
  .text-body {
    font-size: 1.35rem;
  }
  .text-lg {
    font-size: 1.1rem;
  }
  .text-md {
    font-size: 0.9rem;
  }
  .text-sm {
    font-size: 0.75rem;
  }
  .text-xs {
    font-size: 0.5rem;
  }

  @media screen and (max-width: 768px) {
    .text-header {
      font-size: 3rem;
    }
    .text-subheader {
      font-size: 2rem;
    }
    .text-body {
      font-size: 1rem;
    }
  }
  /* Font Weight */
  .font-black {
    font-weight: 900;
  }
  .font-bold {
    font-weight: 700;
  }
  .font-thick {
    font-weight: 500;
  }
  .font-normal {
    font-weight: 400;
  }
  .font-light {
    font-weight: 300;
  }

  /* Text Color */
  .text-primary {
    color: #333333;
  }
  .text-secondary {
    color: #444444;
  }
  .text-contrast {
    color: #ff88cc;
  }
  .text-white {
    color: #fefefe;
  }

  /* BG Color */
  .bg-screen {
    background-color: #fefefe;
  }
  .bg-navbar {
    background-color: #fafafa;
  }
  .bg-navbar-logo {
    background-color: #eeeeee;
  }
  .bg-contrast {
    background-color: #ff88cc;
  }

  /* Text Style */
  .text-underline {
    text-decoration: underline;
  }
  .spacing-sm {
    letter-spacing: 1.1px;
  }
  .spacing-md {
    letter-spacing: 1.125px;
  }
  .text-center {
    text-align: center;
  }
  .line-height-sm {
    line-height: 1.6;
  }

  /* Opacity */
  .opacity-80 {
    opacity: 0.8;
  }
  .opacity-50 {
    opacity: 0.5;
  }
  .opacity-30 {
    opacity: 0.3;
  }

  /* Border Radius */
  .rounded-sm {
    border-radius: 10px;
  }
  .rounded-md {
    border-radius: 20px;
  }
  .rounded-lg {
    border-radius: 30px;
  }
  .rounded-full {
    border-radius: 50%;
  }

  /* Shadow */
  .shadow {
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.15);
  }

  /* Display */
  .flex {
    display: flex;
  }
  .flex-col {
    flex-direction: column;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .justify-center {
    justify-content: center;
  }
  .justify-between {
    justify-content: space-between;
  }
  .justify-even {
    justify-content: space-evenly;
  }
  .items-center {
    align-items: center;
  }
  .items-between {
    align-items: space-between;
  }

  /* Dimension */
  .w-full {
    width: 100%;
  }
  .w-screen {
    width: 100vw;
  }
  .w-50 {
    width: 50%;
  }
  .w-auto {
    width: auto;
  }
  .h-full {
    height: 100%;
  }
  .h-screen {
    height: 100vh;
  }

  /* Margin */
  .mx-auto {
    margin-left: auto;
    margin-right: auto;
  }
  .mx-1 {
    margin-left: 0.25rem;
    margin-right: 0.25rem;
  }
  .mx-2 {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
  .mx-3 {
    margin-left: 0.75rem;
    margin-right: 0.75rem;
  }
  .mx-4 {
    margin-left: 1rem;
    margin-right: 1rem;
  }
  .mx-6 {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
  .mx-8 {
    margin-left: 2rem;
    margin-right: 2rem;
  }
  .my-auto {
    margin-top: auto;
    margin-bottom: auto;
  }
  .my-1 {
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
  }
  .my-2 {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .my-3 {
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
  }
  .my-4 {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .my-6 {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
  .my-8 {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  /* Padding */
  .px-auto {
    padding-left: auto;
    padding-right: auto;
  }
  .px-1 {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
  }
  .px-2 {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  .px-3 {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
  .px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  .px-8 {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .py-auto {
    padding-top: auto;
    padding-bottom: auto;
  }
  .py-1 {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
  }
  .py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  .py-3 {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }
  .py-4 {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .py-6 {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
  .py-8 {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  /* Pointer */
  .pointer {
    cursor: pointer;
  }
  .disabled {
    cursor: not-allowed;
  }

  // Position
  .relative {
    position: relative;
  }
  .absolute {
    position: absolute;
  }
  .fixed {
    position: fixed;
  }
  .top-0 {
    top: 0;
  }
  .left-0 {
    left: 0;
  }
  .bottom-0 {
    bottom: 0;
  }
  .right-0 {
    right: 0;
  }
  .inset-0 {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  .z-1 {
    z-index: 100;
  }
  .z-2 {
    z-index: 200;
  }
  .z-3 {
    z-index: 300;
  }
  .z-4 {
    z-index: 300;
  }
  .z-5 {
    z-index: 300;
  }
  .mt--10 {
    margin-top: -6rem;
  }
`;
