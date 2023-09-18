import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativeStraightforwardTradingIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativeStraightforwardTradingIcon',
  component: IllustrativeStraightforwardTradingIcon,
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
} satisfies Meta<typeof IllustrativeStraightforwardTradingIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativeStraightforwardTradingIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
