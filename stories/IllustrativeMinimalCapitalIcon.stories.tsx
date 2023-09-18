import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativeMinimalCapitalIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativeMinimalCapitalIcon',
  component: IllustrativeMinimalCapitalIcon,
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
} satisfies Meta<typeof IllustrativeMinimalCapitalIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativeMinimalCapitalIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
