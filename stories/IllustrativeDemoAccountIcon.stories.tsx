import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativeDemoAccountIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativeDemoAccountIcon',
  component: IllustrativeDemoAccountIcon,
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
} satisfies Meta<typeof IllustrativeDemoAccountIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativeDemoAccountIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
