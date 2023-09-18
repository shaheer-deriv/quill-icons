import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativeMultipliersIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativeMultipliersIcon',
  component: IllustrativeMultipliersIcon,
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
} satisfies Meta<typeof IllustrativeMultipliersIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativeMultipliersIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
