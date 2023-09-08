import type { Meta, StoryObj } from '@storybook/react';

import { StandalonePersonChalkboardBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandalonePersonChalkboardBoldIcon',
  component: StandalonePersonChalkboardBoldIcon,
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
} satisfies Meta<typeof StandalonePersonChalkboardBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandalonePersonChalkboardBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
