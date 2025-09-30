import 'zone.js';
import 'zone.js/testing';
import { TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

Object.defineProperty(window, 'CSS', { value: undefined });
Object.defineProperty(document, 'doctype', { value: '<!DOCTYPE html>' });
Object.defineProperty(window, 'getComputedStyle', {
  value: () => ({ display: 'none', appearance: ['-webkit-appearance'] })
});

// Initialize Angular testing environment for Jest
TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());


