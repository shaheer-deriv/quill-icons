import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCircleExclamationRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneCircleExclamationRegularIcon',
  component: StandaloneCircleExclamationRegularIcon,
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
} satisfies Meta<typeof StandaloneCircleExclamationRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCircleExclamationRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
