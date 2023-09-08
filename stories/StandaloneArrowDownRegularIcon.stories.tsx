import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneArrowDownRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneArrowDownRegularIcon',
  component: StandaloneArrowDownRegularIcon,
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
} satisfies Meta<typeof StandaloneArrowDownRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneArrowDownRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
