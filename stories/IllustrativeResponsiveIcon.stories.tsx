import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativeResponsiveIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativeResponsiveIcon',
  component: IllustrativeResponsiveIcon,
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
} satisfies Meta<typeof IllustrativeResponsiveIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativeResponsiveIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
