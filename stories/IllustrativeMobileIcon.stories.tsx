import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativeMobileIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativeMobileIcon',
  component: IllustrativeMobileIcon,
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
} satisfies Meta<typeof IllustrativeMobileIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativeMobileIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
