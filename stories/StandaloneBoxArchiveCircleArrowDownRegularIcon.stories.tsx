import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneBoxArchiveCircleArrowDownRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneBoxArchiveCircleArrowDownRegularIcon',
  component: StandaloneBoxArchiveCircleArrowDownRegularIcon,
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
} satisfies Meta<typeof StandaloneBoxArchiveCircleArrowDownRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneBoxArchiveCircleArrowDownRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
