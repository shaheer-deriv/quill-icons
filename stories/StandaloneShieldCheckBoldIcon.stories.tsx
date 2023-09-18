import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneShieldCheckBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneShieldCheckBoldIcon',
  component: StandaloneShieldCheckBoldIcon,
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
} satisfies Meta<typeof StandaloneShieldCheckBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneShieldCheckBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
