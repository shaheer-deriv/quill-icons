import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneExpandBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneExpandBoldIcon',
  component: StandaloneExpandBoldIcon,
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
} satisfies Meta<typeof StandaloneExpandBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneExpandBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
