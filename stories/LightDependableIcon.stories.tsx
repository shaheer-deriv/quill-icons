import type { Meta, StoryObj } from '@storybook/react';

import { LightDependableIcon } from '../src/react/Illustration';

const meta = {
  title: 'Illustrations/LightDependableIcon',
  component: LightDependableIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LightDependableIcon>;

export default meta;

type Story = StoryObj<typeof LightDependableIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
