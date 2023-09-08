import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneChevronUpBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneChevronUpBoldIcon',
  component: StandaloneChevronUpBoldIcon,
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
} satisfies Meta<typeof StandaloneChevronUpBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneChevronUpBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
