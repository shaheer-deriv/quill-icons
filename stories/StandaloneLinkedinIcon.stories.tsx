import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneLinkedinIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneLinkedinIcon',
  component: StandaloneLinkedinIcon,
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
} satisfies Meta<typeof StandaloneLinkedinIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneLinkedinIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
