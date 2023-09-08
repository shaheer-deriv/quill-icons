import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneArrowsRotateRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneArrowsRotateRegularIcon',
  component: StandaloneArrowsRotateRegularIcon,
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
} satisfies Meta<typeof StandaloneArrowsRotateRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneArrowsRotateRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
