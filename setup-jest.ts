import 'jest-preset-angular/setup-jest';

declare var global: any;

const style = global['document'].createElement('style');
// Fixes angular material warning (see: https://github.com/thymikee/jest-preset-angular/issues/83)
style.innerHTML = `
  .mat-theme-loaded-marker {
    display: none;
}`;
global['document'].head.appendChild(style);
