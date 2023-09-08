import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneLightUserTieCircleDollarBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneLightUserTieCircleDollarBoldIcon',
  component: StandaloneLightUserTieCircleDollarBoldIcon,
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
} satisfies Meta<typeof StandaloneLightUserTieCircleDollarBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneLightUserTieCircleDollarBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
