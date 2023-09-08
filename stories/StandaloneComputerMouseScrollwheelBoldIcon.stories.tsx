import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneComputerMouseScrollwheelBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneComputerMouseScrollwheelBoldIcon',
  component: StandaloneComputerMouseScrollwheelBoldIcon,
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
} satisfies Meta<typeof StandaloneComputerMouseScrollwheelBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneComputerMouseScrollwheelBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
