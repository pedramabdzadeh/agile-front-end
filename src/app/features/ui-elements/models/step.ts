export interface Step {
  title: string;
  inputTypes: string[];
  inputs: string[];
  steps: Step[] | undefined;
  id: number;
  allStepSize?: number;
}
