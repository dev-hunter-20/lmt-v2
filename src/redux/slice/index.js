import { combineReducers } from '@reduxjs/toolkit';
import myAppsReducer from './my-apps/MyApps';
import onboardingStateReducer from './onboarding/OnboadingState';
import onboardingReducer from './onboarding/Onboading';

const rootReducer = combineReducers({
  myApps: myAppsReducer,
  onboardingState: onboardingStateReducer,
  onboarding: onboardingReducer,
});

export default rootReducer;
