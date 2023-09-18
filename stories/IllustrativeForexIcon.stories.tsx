import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativeForexIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativeForexIcon',
  component: IllustrativeForexIcon,
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
} satisfies Meta<typeof IllustrativeForexIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativeForexIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
