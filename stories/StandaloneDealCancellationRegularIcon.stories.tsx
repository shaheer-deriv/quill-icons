import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneDealCancellationRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneDealCancellationRegularIcon',
  component: StandaloneDealCancellationRegularIcon,
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
} satisfies Meta<typeof StandaloneDealCancellationRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneDealCancellationRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
