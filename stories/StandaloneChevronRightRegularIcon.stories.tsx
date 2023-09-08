import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneChevronRightRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneChevronRightRegularIcon',
  component: StandaloneChevronRightRegularIcon,
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
} satisfies Meta<typeof StandaloneChevronRightRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneChevronRightRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
