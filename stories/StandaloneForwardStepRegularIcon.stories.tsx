import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneForwardStepRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneForwardStepRegularIcon',
  component: StandaloneForwardStepRegularIcon,
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
} satisfies Meta<typeof StandaloneForwardStepRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneForwardStepRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
