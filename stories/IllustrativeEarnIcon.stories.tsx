import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativeEarnIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativeEarnIcon',
  component: IllustrativeEarnIcon,
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
} satisfies Meta<typeof IllustrativeEarnIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativeEarnIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
