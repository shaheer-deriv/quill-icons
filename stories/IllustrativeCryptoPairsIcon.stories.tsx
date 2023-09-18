import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativeCryptoPairsIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativeCryptoPairsIcon',
  component: IllustrativeCryptoPairsIcon,
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
} satisfies Meta<typeof IllustrativeCryptoPairsIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativeCryptoPairsIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
