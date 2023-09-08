import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneLightUserTieCircleDollarRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneLightUserTieCircleDollarRegularIcon',
  component: StandaloneLightUserTieCircleDollarRegularIcon,
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
} satisfies Meta<typeof StandaloneLightUserTieCircleDollarRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneLightUserTieCircleDollarRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
