import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneFiatOnrampRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneFiatOnrampRegularIcon',
  component: StandaloneFiatOnrampRegularIcon,
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
} satisfies Meta<typeof StandaloneFiatOnrampRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneFiatOnrampRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
