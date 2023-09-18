import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneFiatOnrampBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneFiatOnrampBoldIcon',
  component: StandaloneFiatOnrampBoldIcon,
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
} satisfies Meta<typeof StandaloneFiatOnrampBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneFiatOnrampBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
