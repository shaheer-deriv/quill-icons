import type { Meta, StoryObj } from '@storybook/react';

import { StandalonePauseRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandalonePauseRegularIcon',
  component: StandalonePauseRegularIcon,
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
} satisfies Meta<typeof StandalonePauseRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandalonePauseRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
