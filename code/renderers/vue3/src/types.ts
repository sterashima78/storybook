import type { StoryContext as StoryContextBase } from '@storybook/csf';
import type { ConcreteComponent } from 'vue';

export type { RenderContext } from '@storybook/core-client';

export interface ShowErrorArgs {
  title: string;
  description: string;
}

export type StoryFnVueReturnType = ConcreteComponent<any>;

export type StoryContext = StoryContextBase<VueFramework>;

export type VueFramework = {
  component: ConcreteComponent<any>;
  storyResult: StoryFnVueReturnType;
};
