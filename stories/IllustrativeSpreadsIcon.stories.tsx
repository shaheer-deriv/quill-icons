import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativeSpreadsIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativeSpreadsIcon',
  component: IllustrativeSpreadsIcon,
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
} satisfies Meta<typeof IllustrativeSpreadsIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativeSpreadsIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
