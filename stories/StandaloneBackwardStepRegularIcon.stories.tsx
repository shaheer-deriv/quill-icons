import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneBackwardStepRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneBackwardStepRegularIcon',
  component: StandaloneBackwardStepRegularIcon,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    fill: { control: { type: 'color' } },
    iconSize: {
      control: {
        type: 'radio',
      },
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
      defaultValue: 'md',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof StandaloneBackwardStepRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneBackwardStepRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
