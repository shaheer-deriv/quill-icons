import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativeTrading247Icon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativeTrading247Icon',
  component: IllustrativeTrading247Icon,
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
} satisfies Meta<typeof IllustrativeTrading247Icon>;

export default meta;

type Story = StoryObj<typeof IllustrativeTrading247Icon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
