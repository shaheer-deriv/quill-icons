import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCircleChevronDownRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneCircleChevronDownRegularIcon',
  component: StandaloneCircleChevronDownRegularIcon,
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
} satisfies Meta<typeof StandaloneCircleChevronDownRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCircleChevronDownRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
