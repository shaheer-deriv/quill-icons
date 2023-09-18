import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativeMarketsIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativeMarketsIcon',
  component: IllustrativeMarketsIcon,
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
} satisfies Meta<typeof IllustrativeMarketsIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativeMarketsIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
