import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneArrowDownToLineRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneArrowDownToLineRegularIcon',
  component: StandaloneArrowDownToLineRegularIcon,
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
} satisfies Meta<typeof StandaloneArrowDownToLineRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneArrowDownToLineRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
