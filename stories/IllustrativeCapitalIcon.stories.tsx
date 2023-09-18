import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativeCapitalIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativeCapitalIcon',
  component: IllustrativeCapitalIcon,
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
} satisfies Meta<typeof IllustrativeCapitalIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativeCapitalIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
