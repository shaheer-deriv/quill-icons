import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneLaptopMobileBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneLaptopMobileBoldIcon',
  component: StandaloneLaptopMobileBoldIcon,
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
} satisfies Meta<typeof StandaloneLaptopMobileBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneLaptopMobileBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
