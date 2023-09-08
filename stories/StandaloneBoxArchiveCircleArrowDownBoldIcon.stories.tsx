import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneBoxArchiveCircleArrowDownBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneBoxArchiveCircleArrowDownBoldIcon',
  component: StandaloneBoxArchiveCircleArrowDownBoldIcon,
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
} satisfies Meta<typeof StandaloneBoxArchiveCircleArrowDownBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneBoxArchiveCircleArrowDownBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
