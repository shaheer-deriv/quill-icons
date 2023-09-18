import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivGoUltimateWhiteLogoWordmarkVerticalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivGoUltimateWhiteLogoWordmarkVerticalIcon',
  component: DerivProductDerivGoUltimateWhiteLogoWordmarkVerticalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivGoUltimateWhiteLogoWordmarkVerticalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivGoUltimateWhiteLogoWordmarkVerticalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
