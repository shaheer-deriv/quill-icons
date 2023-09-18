import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativeChartsIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativeChartsIcon',
  component: IllustrativeChartsIcon,
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
} satisfies Meta<typeof IllustrativeChartsIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativeChartsIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
